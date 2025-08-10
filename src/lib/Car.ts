// /lib/car.ts
import  prisma from './prisma';
import { CarStatus } from '@prisma/client';

export async function createCar(data: {
  sellerId: string;
  title: string;
  description?: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage?: number;
  fuelType: string;
  transmission: string;
  status?: CarStatus;
  location?: string;
}) {
  return prisma.car.create({ data });
}

export async function getCarById(id: string) {
  return prisma.car.findUnique({ where: { id }, include: { seller: true, tags: true, offers: true } });
}

export async function getAllCars() {
  return prisma.car.findMany();
}

export async function updateCar(id: string, data: Partial<{ title: string; description: string; price: number; mileage: number; fuelType: string; transmission: string; status: CarStatus; location: string; }>) {
  return prisma.car.update({ where: { id }, data });
}

export async function deleteCar(id: string) {
  return prisma.car.delete({ where: { id } });
}
