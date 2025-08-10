// /lib/user.ts
import prisma from './prisma';
import { UserRole } from '@prisma/client';

export async function createUser(data: {
  email: string;
  passwordHash?: string;
  role: UserRole;
  name?: string;
  phone?: string;
}) {
  return prisma.user.create({ data });
}

export async function getUserById(id: string) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getAllUsers() {
  return prisma.user.findMany();
}

export async function updateUser(id: string, data: Partial<{ email: string; passwordHash: string; role: UserRole; name: string; phone: string; }>) {
  return prisma.user.update({ where: { id }, data });
}

export async function deleteUser(id: string) {
  return prisma.user.delete({ where: { id } });
}
