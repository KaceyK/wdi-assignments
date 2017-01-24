class Elevator 
  attr_reader :current_floor
  def initialize 
    @current_floor = 0 
  end
  
  def go_up()
   if  @current_floor >= 0 && @current_floor <= 12
     @current_floor= 1 + @current_floor
    end
    cheery_greeting
  end
  
  def go_down()
    if  @current_floor > 0 && @current_floor <= 12
      @current_floor = @current_floor - 1 
    end
    cheery_greeting
  end
  
  def cheery_greeting
    puts "Welcome to the #{@current_floor} floor"
  end

end

el1 = Elevator.new 
el1.go_up
el1.go_up
el1.go_up
el1.go_up
el1.go_down
el1.go_down
el1.go_down
el1.go_down
el1.go_down
el1.go_down