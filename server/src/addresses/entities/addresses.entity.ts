import { Areas } from 'src/areas/entities/areas.entity';
import { Users } from 'src/users/entities/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Addresses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 25,
    collation: 'ar-SA-x-icu',
    nullable: true,
  })
  nbhd: string;

  @Column({ type: 'varchar', length: 25, collation: 'ar-SA-x-icu' })
  street: string;

  @Column({ type: 'varchar', length: 25, collation: 'ar-SA-x-icu' })
  building: string;

  @Column({ type: 'smallint' })
  floor: number;

  @Column({ type: 'smallint' })
  apart: number;

  @Column({
    type: 'varchar',
    length: 125,
    collation: 'ar-SA-x-icu',
    nullable: true,
  })
  note: string;

  @ManyToOne(() => Areas, (area) => area.id)
  area: Areas;

  @ManyToOne(() => Users, (user) => user.id)
  user: Users;
}
