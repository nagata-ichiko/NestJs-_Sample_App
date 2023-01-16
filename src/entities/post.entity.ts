import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm'
  
  @Entity('post')
  export class Posts {
    // primary keyになるものをレコードができ次第、都度追加してくれる
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number
  
    @Column({ nullable: false })
    title: string
  
    @Column({ nullable: false })
    description: string
  
    // レコードの作成日時を自動生成できる
    @CreateDateColumn()
    created_at: Date
  
    @UpdateDateColumn()
    update_at: Date
  
    @DeleteDateColumn()
    deleted_at: Date
  }