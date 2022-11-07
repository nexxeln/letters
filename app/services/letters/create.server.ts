import { db } from "../db/db.server";

export const createLetter = async ({
  header,
  content,
}: {
  header: string;
  content: string;
}) => {
  return await db.letter.create({
    data: {
      header,
      content,
    },
  });
};
