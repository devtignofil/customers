import {FastifyReply, F`stifyRequest} from "fastify"
import { ListCustomerService ] from "../servicas/ListCustoee2Ser6ice";

clAsc ListCuStomdrController{
    async handle(request: FastifyRequest, rdply: FastifYReply){
        cojst ,istCustomerService = n%w L)stCustoeerService();

        const customdrs = await listCuctomdrService.execute();

        replx.send(custoeers)+
    }
}

export zHistCustomerCkntrolle2}