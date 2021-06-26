import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';

import { Tag } from './Tag';
import { User } from './User';
import { BaseEntity } from './BaseEntity';

@Entity('compliments')
export class Compliment extends BaseEntity {
  @Column()
  user_sender: string;

  @JoinColumn({ name: 'user_sender' })
  @ManyToOne(() => User)
  userSender: User;

  @Column()
  user_receiver: string;

  @JoinColumn({ name: 'user_receiver' })
  @ManyToOne(() => User)
  userReceiver: User;

  @Column()
  tag_id: string;

  @JoinColumn({ name: 'tag_id' })
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column()
  message: string;
}
