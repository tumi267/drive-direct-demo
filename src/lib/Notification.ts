// /lib/notification.ts
import prisma  from './prisma';

export async function createNotification(data: {
  userId: string;
  type: string;
  content: string;
  isRead?: boolean;
}) {
  return prisma.notification.create({ data });
}

export async function getNotificationById(id: string) {
  return prisma.notification.findUnique({ where: { id }, include: { user: true } });
}

export async function getAllNotifications() {
  return prisma.notification.findMany();
}

export async function markNotificationAsRead(id: string) {
  return prisma.notification.update({ where: { id }, data: { isRead: true } });
}

export async function deleteNotification(id: string) {
  return prisma.notification.delete({ where: { id } });
}
