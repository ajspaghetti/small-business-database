class ClientCompaniesController < ApplicationController
    include ActionController::Cookies

    skip_before_action :authenticated_user
    
    def index
        companies = ClientCompany.all
        render json: companies, status: :ok
    end

    def show
        company = ClientCompany.find(params[:id])
        render json: company, status: :ok #, serializer: ClientCompanyAddressSerializer
    end

    def create
        new_company = ClientCompany.create(company_params)
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
        params_permit(:legal_name, :dba_name, :industry, :co_phone, :co_email, :primary_poc_name, :poc_role, :poc_phone, :poc_email, :annual_revenue, :cc_notes)
    end
end
