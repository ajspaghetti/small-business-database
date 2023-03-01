class ClientCompanyController < ApplicationController
    
    # skip_before_action :authenticated_user

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    
    
    def index
        companies = ClientCompany.all
        render json: companies, status: :ok
    end

    def show
        company = ClientCompany.find(params[:id])
        render json: company, status: :ok
    end

    def create
        new_company = ClientCompany.create!(company_params)
        render json: new_company, status: :created
    end

    def update
        update_company = ClientCompany.find(params[:id]).update!(company_params)
        render json: update_company, status: :accepted
    end

    def destroy
        delete_company = ClientCompany.find(params[:id]).destroy!
        render json: delete_company
        head :no_content
    end

    private

    def company_params
        params_permit(:legal_name, :dba_name, :industry, :phone, :email, :primary_poc_name, :poc_role, :poc_phone, :poc_email, :annual_revenue, :notes)
    end

    def not_found
        render json: { error: "Company not found"}, status: :not_found
    end

end
