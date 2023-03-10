class ContractsController < ApplicationController
    include ActionController::Cookies
    
    skip_before_action :authenticated_user

    def index
        contracts = Contract.all
        render json: contracts, status: :ok
    end

    def show
        contract = Contract.find(params[:id])
        render json: contract, status: :ok
    end

    def create
        new_contract = Contract.create(contract_params)
        render json: new_contract, status: :created
    end

    def update
        update_contract = Contract.find(params[:id]).update!(contract_params)
        render json: update_contract, status: :accepted
    end

    def destroy
        delete_contract = Contract.find(params[:id]).destroy!
        render json: delete_contract
        head :no_content
    end

    private

    def contract_params
        params_permit(:contract_title, :contract_value, :contract_notes, :project_id, :client_company_id, :client_id, :employee_id, :subcontractor_id, :user_id)
    end

end
