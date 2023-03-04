class SkillsController < ApplicationController
    
    # skip_before_action :authenticated_user

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        skills = Skill.all
        render json: skills, status: :ok
    end

    def show
        skill = Skill.find(params[:id])
        render json: skill, status: :ok, serializer: SkillEmployeesSerializer
    end

    def create
        new_skill = Skill.create!(skill_params)
        render json: new_skill, status: :created
    end

    def update
        update_skill = Skill.find(params[:id]).update!(skill_params)
        render json: update_skill, status: :accepted
    end

    def destroy
        delete_skill = Skill.find(params[:id]).destroy!
        render json: delete_skill
        head :no_content
    end

    private

    def skill_params
        params_permit(:skill_name)
    end

    def not_found
        render json: { error: "Skill not found"}, status: :not_found
    end

end
