import { nanoid } from 'nanoid';

export const generateComponentId = ({ keyLength = 5 }) => `i${nanoid(keyLength)}`;