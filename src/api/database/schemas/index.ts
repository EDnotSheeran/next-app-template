import {
  accounts,
  accountsRelations,
  sessions,
  sessionsRelations,
  users,
  usersRelations,
  verifications,
} from "./auth-schema";

export const schema = {
  users,
  accounts,
  accountsRelations,
  sessions,
  sessionsRelations,
  usersRelations,
  verifications,
};

export type Schema = typeof schema;
