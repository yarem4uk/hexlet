<?php

namespace Theory;

require_once '../Sender.php';
require_once '../Http.php';

class SenderTest extends \PHPUnit_Framework_TestCase
{
    public function testSend()
    {
        $msg = 'hellow world';

        $http = $this->getMockBuilder('Http')
            ->setMethods(['post'])
            ->getMock();

        $http->expects($this->once())
            ->method('post')
            ->with(
                $this->equalTo($msg),
                $this->anything()
            );

        $sender = new Sender($http);
        $sender->send($msg);
    }
}
