Index.PACKAGES = {"endless" : [], "endless.transaction" : [], "endless.transaction.akka" : [{"name" : "endless.transaction.akka.AkkaTransactor", "shortDescription" : "", "object" : "endless\/transaction\/akka\/AkkaTransactor$.html", "members_class" : [{"label" : "coordinator", "tail" : "(transactionName: String, branchForID: (BID) => Branch[F, TID, Q, R], timeout: Option[FiniteDuration])(arg0: StringCodec[TID], arg1: BinaryCodec[TID], arg2: BinaryCodec[BID], arg3: Show[BID], arg4: BinaryCodec[Q], arg5: BinaryCodec[R]): Resource[F, Coordinator[F, TID, BID, Q, R]]", "member" : "endless.transaction.akka.AkkaTransactor.coordinator", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#coordinator[TID,BID,Q,R](transactionName:String,branchForID:BID=>endless.transaction.Branch[F,TID,Q,R],timeout:Option[scala.concurrent.duration.FiniteDuration])(implicitevidence$3:endless.transaction.StringCodec[TID],implicitevidence$4:endless.transaction.BinaryCodec[TID],implicitevidence$5:endless.transaction.BinaryCodec[BID],implicitevidence$6:cats.Show[BID],implicitevidence$7:endless.transaction.BinaryCodec[Q],implicitevidence$8:endless.transaction.BinaryCodec[R]):cats.effect.kernel.Resource[F,endless.transaction.Coordinator[F,TID,BID,Q,R]]", "kind" : "def"}, {"member" : "endless.transaction.akka.AkkaTransactor#<init>", "error" : "unsupported entity"}, {"label" : "deployEntityBasedCoordinator", "tail" : "(transactionName: String, branchForID: (BID) => Branch[F, TID, Q, R], timeout: Option[FiniteDuration], deployer: Deployer)(arg0: StringCodec[TID], arg1: BinaryCodec[TID], arg2: BinaryCodec[BID], arg3: Show[BID], arg4: BinaryCodec[Q], arg5: BinaryCodec[R], retryParameters: RetryParameters, deploymentParameters: DeploymentParameters[F, TID, TransactionState[TID, BID, Q, R], TransactionEvent[TID, BID, Q, R]], async: Async[F], logger: Logger[F]): Resource[F, Deployment[F, [G[_]]Coordinator[G, TID, BID, Q, R]]]", "member" : "endless.transaction.Transactor.deployEntityBasedCoordinator", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#deployEntityBasedCoordinator[TID,BID,Q,R](transactionName:String,branchForID:BID=>endless.transaction.Branch[F,TID,Q,R],timeout:Option[scala.concurrent.duration.FiniteDuration],deployer:endless.core.entity.Deployer)(implicitevidence$7:endless.transaction.StringCodec[TID],implicitevidence$8:endless.transaction.BinaryCodec[TID],implicitevidence$9:endless.transaction.BinaryCodec[BID],implicitevidence$10:cats.Show[BID],implicitevidence$11:endless.transaction.BinaryCodec[Q],implicitevidence$12:endless.transaction.BinaryCodec[R],implicitretryParameters:endless.transaction.impl.helpers.RetryHelpers.RetryParameters,implicitdeploymentParameters:deployer.DeploymentParameters[F,TID,endless.transaction.impl.data.TransactionState[TID,BID,Q,R],endless.transaction.impl.data.TransactionEvent[TID,BID,Q,R]],implicitasync:cats.effect.kernel.Async[F],implicitlogger:org.typelevel.log4cats.Logger[F]):cats.effect.kernel.Resource[F,deployer.Deployment[F,[G[_]]endless.transaction.Coordinator[G,TID,BID,Q,R]]]", "kind" : "def"}, {"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "endless\/transaction\/akka\/AkkaTransactor.html###:Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#wait():Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.equals", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#equals(x$1:Object):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "endless\/transaction\/akka\/AkkaTransactor.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "members_object" : [{"label" : "apply", "tail" : "(arg0: Async[F], arg1: Logger[F], akkaCluster: AkkaCluster[F]): AkkaTransactor[F]", "member" : "endless.transaction.akka.AkkaTransactor.apply", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#apply[F[_]](implicitevidence$9:cats.effect.kernel.Async[F],implicitevidence$10:org.typelevel.log4cats.Logger[F],implicitakkaCluster:endless.runtime.akka.deploy.AkkaCluster[F]):endless.transaction.akka.AkkaTransactor[F]", "kind" : "def"}, {"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html###:Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#wait():Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.equals", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#equals(x$1:Object):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "endless\/transaction\/akka\/AkkaTransactor$.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "class" : "endless\/transaction\/akka\/AkkaTransactor.html", "kind" : "class"}, {"name" : "endless.transaction.akka.Config", "shortDescription" : "", "object" : "endless\/transaction\/akka\/Config$.html", "members_object" : [{"label" : "load", "tail" : "(): Config", "member" : "endless.transaction.akka.Config.load", "link" : "endless\/transaction\/akka\/Config$.html#load():endless.transaction.akka.Config", "kind" : "def"}, {"label" : "RetryConfig", "tail" : "", "member" : "endless.transaction.akka.Config.RetryConfig", "link" : "endless\/transaction\/akka\/Config$.html#RetryConfigextendsProductwithSerializable", "kind" : "final case class"}, {"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "endless\/transaction\/akka\/Config$.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "endless\/transaction\/akka\/Config$.html###:Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "endless\/transaction\/akka\/Config$.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "endless\/transaction\/akka\/Config$.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "endless\/transaction\/akka\/Config$.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "endless\/transaction\/akka\/Config$.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "endless\/transaction\/akka\/Config$.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "endless\/transaction\/akka\/Config$.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "endless\/transaction\/akka\/Config$.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "endless\/transaction\/akka\/Config$.html#wait():Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "endless\/transaction\/akka\/Config$.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "endless\/transaction\/akka\/Config$.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "endless\/transaction\/akka\/Config$.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "endless\/transaction\/akka\/Config$.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.equals", "link" : "endless\/transaction\/akka\/Config$.html#equals(x$1:Object):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "endless\/transaction\/akka\/Config$.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "endless\/transaction\/akka\/Config$.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "endless\/transaction\/akka\/Config$.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "endless\/transaction\/akka\/Config$.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "members_case class" : [{"member" : "endless.transaction.akka.Config#<init>", "error" : "unsupported entity"}, {"label" : "askTimeout", "tail" : ": FiniteDuration", "member" : "endless.transaction.akka.Config.askTimeout", "link" : "endless\/transaction\/akka\/Config.html#askTimeout:scala.concurrent.duration.FiniteDuration", "kind" : "val"}, {"label" : "retries", "tail" : ": RetryConfig", "member" : "endless.transaction.akka.Config.retries", "link" : "endless\/transaction\/akka\/Config.html#retries:endless.transaction.akka.Config.RetryConfig", "kind" : "val"}, {"label" : "productElementNames", "tail" : "(): Iterator[String]", "member" : "scala.Product.productElementNames", "link" : "endless\/transaction\/akka\/Config.html#productElementNames:Iterator[String]", "kind" : "def"}, {"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "endless\/transaction\/akka\/Config.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "endless\/transaction\/akka\/Config.html###:Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "endless\/transaction\/akka\/Config.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "endless\/transaction\/akka\/Config.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "endless\/transaction\/akka\/Config.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "endless\/transaction\/akka\/Config.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "endless\/transaction\/akka\/Config.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "endless\/transaction\/akka\/Config.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "endless\/transaction\/akka\/Config.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "endless\/transaction\/akka\/Config.html#wait():Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "endless\/transaction\/akka\/Config.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "endless\/transaction\/akka\/Config.html#notify():Unit", "kind" : "final def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "endless\/transaction\/akka\/Config.html#clone():Object", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "endless\/transaction\/akka\/Config.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "endless\/transaction\/akka\/Config.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "endless\/transaction\/akka\/Config.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "case class" : "endless\/transaction\/akka\/Config.html", "kind" : "case class"}]};