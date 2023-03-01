class ClientController < ApplicationController
    get "/clients" do
        clients = Client.all
        clients.to_json
    end

    get "/clients/:id" do
        client = Client.find(params[:id])
        client.to_json
    end

    post "/clients" do
        new_client = Client.create!(
            first_name: params[:first_name],
            last_name: params[:last_name],
            job_title: params[:job_title],
            phone: params[:phone],
            email: params[:emails],
            client_company_id: params[:client_company_id],
            notes: params[:notes]
        )
        new_client.to_json
    end

    patch "/clients/:id" do
        client = Client.find(params[:id])
        client.update(
            first_name: params[:first_name],
            last_name: params[:last_name],
            job_title: params[:job_title],
            phone: params[:phone],
            email: params[:emails],
            client_company_id: params[:client_company_id],
            notes: params[:notes]
        )
        client.to_json
    end

    delete "/clients/:id" do
        client = Client.find(params[:id])
        client.destroy
    end
end
