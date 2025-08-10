// /lib/offer.ts
import  prisma  from './prisma';
import { OfferStatus } from '@prisma/client';

export async function createOffer(data: {
  dealerId: string;
  carId: string;
  offerPrice: number;
  message?: string;
  status?: OfferStatus;
}) {
  return prisma.offer.create({ data });
}

export async function getOfferById(id: string) {
  return prisma.offer.findUnique({ where: { id }, include: { dealer: true, car: true } });
}

export async function getAllOffers() {
  return prisma.offer.findMany();
}

export async function updateOffer(id: string, data: Partial<{ offerPrice: number; message: string; status: OfferStatus; }>) {
  return prisma.offer.update({ where: { id }, data });
}

export async function deleteOffer(id: string) {
  return prisma.offer.delete({ where: { id } });
}
