@extends('admin.main.index')

@section('content')

    <div class="content-header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <h4>Информация о доставке</h4>
                    <hr>
                    <label>Имя</label>
                    <div class="pl-3">{{$order->fname}}</div>
                    <label>Фамилия</label>
                    <div class="pl-3">{{$order->lname}}</div>
                    <label>Почта</label>
                    <div class="pl-3">{{$order->email}}</div>
                    <label>Номер телефона</label>
                    <div class="pl-3">{{$order->phone}}</div>
                    <label>Адрес доставки</label>
                    <div class="pl-3">
                        {{$order->address1}},<br>
                        {{$order->address2}},<br>
                        {{$order->city}},<br>
                        {{$order->country}},
                    </div>
                    <label>ПИН код</label>
                    <div class="pl-3">{{$order->pincode}}</div>
                </div>
                <div class="col-md-6">
                    <h4>Информация о заказе</h4>
                    <hr>
                    <table class="table table-border">
                        <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Количество</th>
                            <th>Цена</th>
                            <th>Изображение</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($order->orderItems as $item)
                        <tr>
                            <td>{{$item->products->title}}</td>
                            <td>{{$item->qty}}</td>
                            <td>{{$item->price}}</td>
                            <td>
                                <img src="{{Storage::url($item->products->product_image_1)}}" style="width: 50px" alt="">
                            </td>
                        </tr>
                        @endforeach
                        </tbody>
                    </table>
                    <h4>Общая сумма: {{$order->total_price}}</h4>

                    <hr>
                    <div class="mt-3">
                        <label>Статус заказа</label>
                        <form action="{{route('orders.update', $order->id)}}" method="post">
                            @csrf
                            @method('PUT')
                            <select class="form-select" name="order_status">
                                <option {{$order->status == '0' ? 'selected' : ''}} value="0">В ожидании</option>
                                <option {{$order->status == '1' ? 'selected' : ''}} value="1">Доставлен</option>
                            </select>
                            <div>
                                <button type="submit" class="btn btn-primary mt-1">Обновить</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div><!-- /.container-fluid -->
    </div>


@endsection
