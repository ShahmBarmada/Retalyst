import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Operations } from 'src/operations/entities/operations.entity';
import { Products } from 'src/products/entities/products.entity';

@Entity()
export class OprItems {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Operations, (opr) => opr.id)
  opr: Operations;

  @ManyToOne(() => Products, (prd) => prd.id)
  prd: Products;

  @Column({ type: 'numeric', precision: 3, scale: 1 })
  qty: number;

  @Column({ type: 'numeric', precision: 7, scale: 2 })
  price: number;
}
