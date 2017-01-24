class Calculator
  
  attr_reader :currentValue
  
  def initialize
    @currentValue = 0

    
  end
  def multiply(num)
  @currentValue = num * @currentValue
    @currentValue
  end
  def add(num)
    @currentValue = num + @currentValue
  end
  def subtract(num)
    @currentValue = @currentValue - num
  end
  def divide(num)
    @currentValue = @currentValue / num
  end
  def clear 
    @currentValue = 0
  end
  def get_current_value
    @currentValue
  end
end


m1 = Calculator.new

puts m1.add(10)
puts m1.add(400)
puts m1.multiply(40)
puts m1.subtract(20)
puts m1.divide(4)


 
m1.clear
puts m1.currentValue