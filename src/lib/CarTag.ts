// /lib/cartag.ts
import  prisma  from './prisma';

export async function createCarTag(data: { carId: string; tag: string }) {
  return prisma.carTag.create({ data });
}

export async function getCarTagById(id: string) {
  return prisma.carTag.findUnique({ where: { id }, include: { car: true } });
}

export async function getAllCarTags() {
  return prisma.carTag.findMany();
}

export async function deleteCarTag(id: string) {
  return prisma.carTag.delete({ where: { id } });
}
