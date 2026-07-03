export interface Note {
  id: string;
  title: string;
  description: string;
  tags: string[];

  pinned: boolean;
  archived: boolean;
  trashed: boolean;

  createdAt: string;
  updatedAt: string;
}