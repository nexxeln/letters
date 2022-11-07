import { db } from "./db.server";

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

export const getLetterFromId = async ({ id }: { id: string }) => {
  return await db.letter.findUnique({
    where: {
      id,
    },
  });
};
