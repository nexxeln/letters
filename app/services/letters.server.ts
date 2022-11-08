import { db } from "./db.server";

export const createLetter = async ({
  header,
  content,
}: {
  header: string;
  content: string;
}) => {
  try {
    return await db.letter.create({
      data: {
        header,
        content,
      },
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getLetterFromId = async ({ id }: { id: string }) => {
  try {
    return await db.letter.findUnique({
      where: {
        id,
      },
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
