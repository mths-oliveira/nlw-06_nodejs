import { v4 as uuid } from 'uuid';

import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryColumn({
    type: 'uuid',
  })
  readonly id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'varchar',
    default: 'now()',
  })
  readonly createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'varchar',
    default: 'now()',
  })
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
