import { Knex } from "knex";
import bcrypt from 'bcryptjs';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  const PASWORD = "admin123";
  // Inserts seed entries
  await knex("users").insert([
    {
      id: 1,
      email: "admin@mail.com",
      password: await bcrypt.hash(PASWORD, 10),
    },
  ]);
}
