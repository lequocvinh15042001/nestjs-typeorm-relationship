import { DataSource, DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nest',
  entities: ['dist/models/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*.js'],
  synchronize: false, // Tắt tự đồng bộ, sử dụng migration thay thế
};

export const AppDataSource = new DataSource(config);
export default config;
