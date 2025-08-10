// /lib/dealer.ts
import  prisma  from './prisma';
import { SubscriptionType } from '@prisma/client';

export async function createDealer(data: {
  userId: string;
  dealershipName: string;
  subscriptionType?: SubscriptionType;
  subscriptionExpiry?: Date;
}) {
  return prisma.dealer.create({ data });
}

export async function getDealerById(id: string) {
  return prisma.dealer.findUnique({ where: { id }, include: { user: true, offers: true } });
}

export async function getAllDealers() {
  return prisma.dealer.findMany();
}

export async function updateDealer(id: string, data: Partial<{ dealershipName: string; subscriptionType: SubscriptionType; subscriptionExpiry: Date; }>) {
  return prisma.dealer.update({ where: { id }, data });
}

export async function deleteDealer(id: string) {
  return prisma.dealer.delete({ where: { id } });
}
