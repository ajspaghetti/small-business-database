class SkillEmployeesSerializer < ActiveModel::Serializer
  attributes :id, :skill_name, :first_name, :middle_name, :last_name, :suffix

  has_and_belongs_to_many :employees
end
