
defmodule Math do

  def getMultiplesOf3and5(0, list), do: IO.puts Enum.sum(list)
  def getMultiplesOf3and5(n, list) when rem(n, 3) == 0 do
    getMultiplesOf3and5(n - 1, [n| list])
  end
  def getMultiplesOf3and5(n, list) when rem(n, 5) == 0 do
    getMultiplesOf3and5(n - 1, [n| list])
  end
  def getMultiplesOf3and5(n, list) do
    getMultiplesOf3and5(n - 1, list)
  end

end

IO.inspect Math.getMultiplesOf3and5(999, [])

## Fast way
# a = 1..10
# a |> Stream.filter(fn(x) -> rem(x,3) == 0 || rem(x,5) end) |> Enum.sum
