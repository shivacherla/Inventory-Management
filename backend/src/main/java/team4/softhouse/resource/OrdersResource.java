package team4.softhouse.resource;


import team4.softhouse.db.entity.Orders;
import team4.softhouse.process.OrdersProcess;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import java.util.List;

import static jersey.repackaged.com.google.common.base.Preconditions.checkNotNull;

@PermitAll
@Path("/orders")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class OrdersResource {

    private OrdersProcess ordersProcess;

    public OrdersResource(OrdersProcess ordersProcess){
        this.ordersProcess = checkNotNull(ordersProcess);
    }

    @RolesAllowed("ADMIN")
   @GET
    public List<Orders> get(@QueryParam("type") String type) throws javassist.NotFoundException {
        System.out.println(type);
       if(type == null) {
       return this.ordersProcess.getorders();
    }
       return this.ordersProcess.getorders();
    }

   @POST
   public int OrderedProduct(Orders product) {return this.ordersProcess.create(product);}

/*    @DELETE
    @Path("/{id}")
    public void deleteOrder(@PathParam("id") Integer id) {
        this.ordersProcess.delete(id);
    }*/

    @PUT
    @Path("/{id}")
    public void updateOrder(@PathParam("id") Integer id, Integer status) {
        this.ordersProcess.updateOrder(id, status);
    }


}




