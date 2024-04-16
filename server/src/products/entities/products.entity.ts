import { Categories } from 'src/categories/entities/categories.entity';
import { Units } from 'src/units/entities/units.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, collation: 'ar-SA-x-icu' })
  desc: string;

  @Column({ type: 'numeric', precision: 7, scale: 2 })
  pricecur: number;

  @Column({ type: 'numeric', precision: 7, scale: 2, nullable: true })
  priceold: number;

  @Column({ type: 'boolean', default: false })
  promo: boolean;

  @Column({ type: 'boolean', default: false })
  active: boolean;

  @Column({ type: 'bytea', nullable: true })
  image: Buffer;

  @ManyToOne(() => Categories, (category) => category.id, { nullable: true })
  category: Categories;

  @ManyToOne(() => Units, (unit) => unit.id)
  unit: Units;
}
