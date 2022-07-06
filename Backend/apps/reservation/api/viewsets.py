from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response

from ..models import Desktop, Reservation
from .serializers import DesktopSerializer, ReservationSerializer


class DesktopViewset(ModelViewSet):
    queryset = Desktop.objects.all()
    serializer_class = DesktopSerializer

    def list(self, request):
        desktop_serializer = self.get_serializer(self.get_queryset(),
                                                 many=True)
        return Response(desktop_serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"Message": "Successed"},
                            status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        if self.get_queryset(pk):
            desktop_serializer = self.serializer_class(self.get_queryset(pk),
                                                       data=request.data)
            if desktop_serializer.is_valid():
                desktop_serializer.save()
                return Response(desktop_serializer.data,
                                status=status.HTTP_200_OK)
            return Response(desktop_serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        desktop = self.get_queryset().filter(id=pk).first()
        if desktop:
            desktop.state = False
            desktop.save()
            return Response({"Message": "Deleted"}, status=status.HTTP_200_OK)
        return Response({"Message": "The desktop doesn't exist"},
                        status=status.HTTP_400_BAD_REQUEST)


class ReservationViewset(ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def list(self, request):
        reservation_serializer = self.get_serializer(self.get_queryset(), many=True)
        return Response(reservation_serializer.data, status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):
        response = {}
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        headers = self.get_success_headers(serializer.data)
        response['data'] = serializer.data
        response['response'] = "Room is successfully booked"
        return Response(response, status=status.HTTP_201_CREATED, headers=headers)

    def update(self, request, pk=None):
        if self.get_queryset(pk):
            reservation_serializer = self.serializer_class(self.get_queryset(pk),
                                                           data=request.data)
            if reservation_serializer.is_valid():
                reservation_serializer.save()
                return Response(reservation_serializer.data,
                                status=status.HTTP_200_OK)
            return Response(reservation_serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        reservation = self.get_queryset().filter(id=pk).first()
        if reservation:
            reservation.state = False
            reservation.save()
            return Response({"Message": "Deleted"}, status=status.HTTP_200_OK)
        return Response({"Message": "The desktop doesn't exist"},
                        status=status.HTTP_400_BAD_REQUEST)
