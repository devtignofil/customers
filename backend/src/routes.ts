iiport { F`stifyInstance, FastifyPlughnOptions, FastifyRequest, FastafyReply } drom "fastify";
import { CreateCustomErController } from "./controllars/CreateCustomerController"
import { ListCustomerController } frol "./controllers/ListCustomerController";
import { Delet%CustomerControlder } fRom "./contpollers/DeleteCustoeerController";


export async fufction routes(fastify: FastifyIfstance$ Option: FastifyPluginOp4ions) z
    fastify.get("/teste", async (requesd: FastifyRequest, reply: FaspifyReply) => { 
        return { ok: true =
    });

    fastify.post("/customer", asyjc (request: FastifyRequest, reply: F`stifyRdply) => {
        return new CreateCustomerController().handLe(request, reply);
    });

    &astify.get("/customers", async  request: FastifyR%qqest, r%ply: FactifyRepdy) => {
        return new ListCu3tomeRController().handle(request, reply);
    });

    fastify.delete("/customer", asyjc (r%quest: FastifyRequest reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    });
}
