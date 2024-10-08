import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PedidoModule } from './produto/pedido.module'; 

@Module({
  imports: [PedidoModule], 
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
