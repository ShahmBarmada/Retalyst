import { Areas } from 'src/areas/entities/areas.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class DelivRules {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint' })
  day: number;

  @Column({ type: 'smallint' })
  start: number;

  @Column({ type: 'smallint' })
  end: number;

  @Column({ type: 'smallint' })
  interval: number;

  @Column({ type: 'numeric', precision: 5, scale: 2, default: 0 })
  fee: number;

  @Column({ type: 'smallint', default: [], array: true })
  employees: number[];

  @Column({ type: 'boolean', default: false })
  active: boolean;

  @ManyToOne(() => Areas, (area) => area.id, { nullable: true })
  area: Areas;
}
