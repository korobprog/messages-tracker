import { v4 as uuidv4 } from 'uuid';
import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function PATCH(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  try {
    const profile = await currentProfile();
    if (!profile) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    if (!params.serverId) {
      return new NextResponse('Server ID Missing', { status: 400 });
    }

    const server = await db.server.findUnique({
      where: {
        id: params.serverId,
      },
    });

    if (!server || server.profileId !== profile.id) {
      return new NextResponse('Server not found', { status: 404 });
    }

    const updatedServer = await db.server.update({
      where: {
        id: params.serverId,
      },
      data: {
        inviteCode: uuidv4(),
      },
    });

    return NextResponse.json(updatedServer);
  } catch (error) {
    console.error('[SERVER_ID]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
