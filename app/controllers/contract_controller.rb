class ContractController < ApplicationController
    get "/contracts" do
        contracts = Contract.all
        contracts.to_json
    end

    get "/contracts/:id" do
        contract = Contract.find(params[:id])
        contract.to_json
    end

    post "/contracts" do
        new_contract = Contract.create!(
            contract_title: params[:contract_title],
            contract_value: params[:contract_value],
            contract_notes: params[:contract_notes],
            project_id: params[:project_id],
            client_company_id: params[:client_company_id],
            client_id: params[:client_id],
            employee_id: params[:employee_id],
            subcontractor_id: params[:subcontractor_id],
            user_id: params[:user_id]
        )
        new_contract.to_json
    end

    patch "/contracts/:id" do
        contract = Contract.find(params[:id])
        contract.update(
            contract_title: params[:contract_title],
            contract_value: params[:contract_value],
            contract_notes: params[:contract_notes],
            project_id: params[:project_id],
            client_company_id: params[:client_company_id],
            client_id: params[:client_id],
            employee_id: params[:employee_id],
            subcontractor_id: params[:subcontractor_id],
            user_id: params[:user_id]
        )
        contract.to_json
    end

    delete "/contracts/:id" do
        contract = Contract.find(params[:id])
        contract.destroy
    end

end
