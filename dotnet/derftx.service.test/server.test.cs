using Xunit;
using Microsoft.AspNetCore.Http;

namespace derftx.service.test
{
  public class TestServer
  {
    [Fact]
    public void Test_Server_Root()
    {
      Assert.NotNull(Server.Index(new DefaultHttpContext()));
    }
  }
}
