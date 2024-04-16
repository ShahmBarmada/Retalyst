import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint' })
  level: number;

  @Column({ type: 'smallint' })
  parent: number;

  @Column({ type: 'varchar', length: 30, collation: 'ar-SA-x-icu' })
  desc: string;

  @Column({ type: 'bytea', nullable: true })
  image: Buffer;
}
