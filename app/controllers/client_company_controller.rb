class ClientCompanyController < ApplicationController
    get "/companies" do
        companies = ClientCompany.all
        companies.to_json
    end

    get "/companies/:id" do
        company = ClientCompany.find(params[:id])
        company.to_json
    end

    post "/companies" do
        new_company = ClientCompany.create!(
            legal_name: params[:legal_name],
            dba_name: params[:dba_name],
            industry: params[:industry],
            # address_id: params[:address_id [include: :zip]],
            phone: params[:phone],
            email: params[:email],
            primary_poc_name: params[:primary_poc_name],
            poc_role: params[:poc_role],
            poc_phone: params[:poc_phone],
            poc_email: params[:poc_email],
            annual_revenue: params[:annual_revenue],
            notes: params[:notes]
        )
        new_company.to_json
    end

    patch "/companies/:id" do
        company = ClientCompany.find(params[:id])
        company.update(
            legal_name: params[:legal_name],
            dba_name: params[:dba_name],
            industry: params[:industry],
            # address_id: params[:address_id [include: :zip]],
            phone: params[:phone],
            email: params[:email],
            primary_poc_name: params[:primary_poc_name],
            poc_role: params[:poc_role],
            poc_phone: params[:poc_phone],
            poc_email: params[:poc_email],
            annual_revenue: params[:annual_revenue],
            notes: params[:notes]
        )
        company.to_json
    end

    delete "/companies/:id" do
        company = ClientCompany.find(params[:id])
        company.destroy
    end

end
