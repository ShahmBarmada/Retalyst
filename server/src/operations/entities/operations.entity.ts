import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { OprTypes } from 'src/oprtypes/entities/oprtypes.entity';
import { OprStates } from 'src/oprstates/entities/oprstates.entity';
import { Addresses } from 'src/addresses/entities/addresses.entity';
import { Users } from 'src/users/entities/users.entity';

@Entity()
export class Operations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp with time zone', precision: 0 })
  created: string;

  @Column({ type: 'timestamp with time zone', precision: 0 })
  due: string;

  @Column({ type: 'timestamp with time zone', precision: 0, nullable: true })
  fin: string;

  @Column({ type: 'smallint' })
  period: number;

  @ManyToOne(() => OprTypes, (type) => type.id)
  type: OprTypes;

  @ManyToOne(() => OprStates, (state) => state.id)
  state: OprStates;

  @ManyToOne(() => Users, (user) => user.id)
  client: Users;

  @ManyToOne(() => Users, (user) => user.id, { nullable: true })
  employee: Users;

  @ManyToOne(() => Users, (addr) => addr.id)
  address: Addresses;

  @Column({ type: 'varchar', length: 125, collation: 'ar-SA-x-icu' })
  note: string;

  @Column({ type: 'varchar', array: true, nullable: true })
  vouchers: string[];
}
