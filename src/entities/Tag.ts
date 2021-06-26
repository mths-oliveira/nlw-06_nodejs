import { Entity, Column } from 'typeorm';

import { BaseEntity } from './BaseEntity';

@Entity('tags')
class Tag extends BaseEntity {
  @Column()
  name: string;

  name_custom(): string {
    return `#${this.name}`;
  }
}

export { Tag };
