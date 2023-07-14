import axios from 'axios';
import { User } from '../definitions';

const BASE_URL = import.meta.env.VITE_BASE_URL ?? 'http://localhost:3000';

export async function getAllUsers(): Promise<User[]| undefined> {
  try {
    const response = await axios(`${BASE_URL}/users`);
    return response.data;
  } catch (e: unknown) {
    console.error(e);
    return;
  }
}

export async function postProfileImage(userId: number, imageBase64: File | ArrayBuffer | null): Promise<User | undefined> {
  try {
    const response = await axios.put(`${BASE_URL}/users/${userId}`, {user: {avatar: imageBase64}});
    return response.data;
  } catch (e: unknown) {
    console.error(e);
  }
}

export async function createAConnection(userId: number) {
  try {
    const response = await axios.put(`${BASE_URL}/users/${userId}/connections/create`);
    return response.data;
  } catch (e: unknown) {
    console.error(e);
    return;
  }
}