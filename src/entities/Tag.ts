import { Entity, Column } from 'typeorm';

import { BaseEntity } from './BaseEntity';

@Entity('tags')
export class Tag extends BaseEntity {
  @Column()
  name: string;
}
