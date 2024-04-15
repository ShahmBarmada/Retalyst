import { Roles } from 'src/roles/entities/roles.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, collation: 'ar-SA-x-icu' })
  name: string;

  @Column({ type: 'varchar', length: 11, unique: true })
  phone1: string;

  @Column({ type: 'varchar', length: 11, nullable: true })
  phone2: string;

  @Column({ type: 'varchar', length: 30, nullable: true, unique: true })
  email: string;

  @Column({ type: 'varchar' })
  hash: string;

  @ManyToOne(() => Roles, (role) => role.id)
  role: Roles;
}
