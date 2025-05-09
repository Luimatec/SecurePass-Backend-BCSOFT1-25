import { Document, Types } from 'mongoose';

export enum UserRole {
  RESIDENTE = 'residente',
  GUARDIA = 'guardia',
  ADMIN = 'admin',
}

export interface IUserInput {
  nombre: string;
  email: string;
  password: string;
  role: UserRole;
  imagenUrl?: string; // URL de Cloudinary
  apartamento?: string;
  torre?: string;
}

export interface IUser extends IUserInput, Document {
  _id: Types.ObjectId;
  fechaRegistro: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}