import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { platformValidationSchema } from 'validationSchema/platforms';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getPlatforms();
    case 'POST':
      return createPlatform();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getPlatforms() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.platform
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'platform'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createPlatform() {
    await platformValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.content?.length > 0) {
      const create_content = body.content;
      body.content = {
        create: create_content,
      };
    } else {
      delete body.content;
    }
    if (body?.guest?.length > 0) {
      const create_guest = body.guest;
      body.guest = {
        create: create_guest,
      };
    } else {
      delete body.guest;
    }
    if (body?.search?.length > 0) {
      const create_search = body.search;
      body.search = {
        create: create_search,
      };
    } else {
      delete body.search;
    }
    if (body?.team_member?.length > 0) {
      const create_team_member = body.team_member;
      body.team_member = {
        create: create_team_member,
      };
    } else {
      delete body.team_member;
    }
    const data = await prisma.platform.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
