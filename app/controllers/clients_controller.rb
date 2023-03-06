class ClientsController < ApplicationController
    
    # skip_before_action :authorize
    
    def index
        clients = Client.all
        render json: clients, status: :ok
    end

    def show
        client = Client.find(params[:id])
        render json: client, status: :ok
    end

    def create
        new_client = Client.create!(client_params)
        render json: new_client, status: :created
    end

    def update
        update_client = Client.find(params[:id]).update!(client_params)
        render json: update_client, status: :accepted
    end

    def destroy
        delete_client = Client.find(params[:id]).destroy!
        render json: delete_client
        head :no_content
    end

    private

    def client_params
        params_permit(:first_name, :last_name, :job_title, :client_phone, :client_email, :client_company_id, :client_notes)
    end
end
