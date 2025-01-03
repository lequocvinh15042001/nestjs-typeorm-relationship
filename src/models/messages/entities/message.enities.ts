import { Column } from 'typeorm'
import { IMessage } from '../interfaces/message.interface'
import { 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'messages' })
export class Message implements IMessage {
  @PrimaryGeneratedColumn()  // Chú ý rằng id phải là số khi sử dụng PrimaryGeneratedColumn
  id: number;  // Thay từ string thành number

  @Column({name:'conversation_id', nullable: true})
  conversation_id: number;

  @Column({default: true})
  status: boolean;

  @Column({name: 'message', length: 255})
  message: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true})
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
  updatedAt: Date;
}
