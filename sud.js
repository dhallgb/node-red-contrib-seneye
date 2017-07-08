module.exports = function(RED) {
    function SUDNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {

    dev = usb.core.find(idVendor=9463, idProduct=8708)
    if dev.is_kernel_driver_active(interface):
        dev.detach_kernel_driver(interface)
    dev.set_configuration()
    usb.util.claim_interface(dev, interface)
    configuration = dev.get_active_configuration()
    interface = configuration[(0,0)]
    epIn = usb.util.find_descriptor(interface, custom_match= lambda e: usb.util.endpoint_direction(e.bEndpointAddress) == usb.util.ENDPOINT_IN)
    epOut = usb.util.find_descriptor(interface, custom_match = lambda e: usb.util.endpoint_direction(e.bEndpointAddress) == usb.util.ENDPOINT_OUT)
    assert epIn is not None
    assert epOut is not None
    rc=dev.write(epOut,"HELLOSUD")
    ret=dev.read(epIn,epIn.wMaxPacketSize)
    rc=dev.write(epOut,"READING")
    ret=dev.read(epIn,epIn.wMaxPacketSize,1000)
    ret=dev.read(epIn,epIn.wMaxPacketSize,10000)
    c = BitArray(ret)
    rc=dev.write(epOut,"BYESUD")
    s={}
    i=36
    s['InWater']=p[i]
    s['SlideNotFitted']=p[i+1]
    s['SlideExpired']=p[i+2]
    ph=p[80:96]
    s['pH']=ph.uintle/100   # divided by 100
    nh3=p[96:112]
    s['NH3']=nh3.uintle/1000  # divided by 1000
    temp=p[112:144]
    s['Temp']=temp.intle/1000 # divided by 1000





            node.send(msg);
        });
    }
    RED.nodes.registerType("SUD",SUDNode);
}
